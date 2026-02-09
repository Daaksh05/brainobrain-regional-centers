from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional

app = FastAPI(title="Brainobrain Website Backend")

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the actual origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InquiryRequest(BaseModel):
    fullName: str
    age: int
    parentPhone: str
    program: str
    centerName: str

@app.get("/")
async def root():
    return {"message": "Brainobrain API is running"}

@app.post("/api/inquiry")
async def create_inquiry(inquiry: InquiryRequest):
    # Here you would typically save to a database
    # For now, we'll just log it and return success
    print(f"Received inquiry: {inquiry}")
    
    # Simulate some processing or validation
    if not inquiry.fullName or not inquiry.parentPhone:
        raise HTTPException(status_code=400, detail="Missing required fields")
        
    return {
        "status": "success",
        "message": f"Inquiry received for {inquiry.fullName}. We will contact you soon!",
        "received_data": inquiry
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
