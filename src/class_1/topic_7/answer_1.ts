//data shape of “user”
interface Address {
    street: string | null;
    city: string;
    country: string;
}

interface Company {
    companyName: string;
    yearlyIncome: number;
}

interface User {
    name: string;
    age: number;
    email: string;
    address: Address;
    company?: Company;
}

//initialize an User array with this data
const users: User[] = [
    {
        name: "Jane Smith",
        age: 25,
        email: "jane.smith@company.com",
        address: {
            street: "456 Elm Street",
            city: "Los Angeles",
            country: "USA"
        },
        company: {
            companyName: "Big Corporation",
            yearlyIncome: 85000
        }
    },
    {
        name: "Michael Chen",
        age: 42,
        email: "michael.chen@tech.asia",
        address: {
            street: null,
            city: "Tokyo",
            country: "Japan"
        }
    },
    {
        name: "Aisha Sharma",
        age: 38,
        email: "aisha.sharma@global.eu",
        address: {
            street: "Flat 10, Maple Road",
            city: "London",
            country: "UK"
        },
        company: {
            companyName: "Global Consulting",
            yearlyIncome: 72000
        }
    },
    {
        name: "David Rodriguez",
        age: 28,
        email: "david.rodriguez@startup.com",
        address: {
            street: "21 Jump Street",
            city: "Berlin",
            country: "Germany"
        },
        company: {
            companyName: "Startup Inc.",
            yearlyIncome: 50000
        }
    }
];
//