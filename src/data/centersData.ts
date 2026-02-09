export interface CenterData {
    id: string;
    name: string;
    district: string;
    address: string;
    phone: string[];
    hours: string;
    mapEmbed: string;
    whatsappMsg: string;
    about: string;
}

export const centersData: Record<string, CenterData> = {
    bhavani: {
        id: "bhavani",
        name: "Bhavani",
        district: "Erode",
        address: "521/2, Near Palaniyappa Mandabam, Shakti Steel Road, Bhavani Main Road, Bhavani-638301, Tamil Nadu",
        phone: ["9942148022", "9659351752"],
        hours: "Mon-Sat, 4:30 PM - 7:30 PM",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.795899999999!2d77.7123!3d11.4507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9414000000001%3A0x0!2zMTHCsDI3JzAyLjUiTiA3N8KwNDInNDQuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
        whatsappMsg: "Hi! I'd like to know more about Brainobrain Bhavani center.",
        about: "Welcome to Brainobrain Bhavani, where we are dedicated to nurturing the hidden potential in every child in the Erode District. Our center provides a world-class cognitive development training environment, helping children aged 4-14 achieve academic excellence and personal growth."
    },
    mettur: {
        id: "mettur",
        name: "Mettur",
        district: "Salem",
        address: "[Location Details to be Confirmed], Mettur, Salem District, Tamil Nadu",
        phone: ["9942148022", "9659351752"],
        hours: "Mon-Sat, 4:30 PM - 7:30 PM",
        mapEmbed: "",
        whatsappMsg: "Hi! I'd like to know more about Brainobrain Mettur center.",
        about: "Welcome to Brainobrain Mettur, where we are dedicated to nurturing the hidden potential in every child in the Salem District. We follow the global standards of Brainobrain to ensure the best results for our students."
    },
    anthiyur: {
        id: "anthiyur",
        name: "Anthiyur",
        district: "Nilgiris",
        address: "[Location Details to be Confirmed], Anthiyur, Nilgiris District, Tamil Nadu",
        phone: ["9942148022", "9659351752"],
        hours: "Mon-Sat, 4:30 PM - 7:30 PM",
        mapEmbed: "",
        whatsappMsg: "Hi! I'd like to know more about Brainobrain Anthiyur center.",
        about: "Welcome to Brainobrain Anthiyur, Nilgiris. Our commitment is to provide a supportive and stimulating environment where kids can develop vital life skills."
    }
};
