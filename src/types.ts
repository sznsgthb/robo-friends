// FUNCTION TYPES
export type DummyUser = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export type DummyUserResponse = {
    users: DummyUser[];
};


// PROPS TYPES

export type Robot = {
    name: string;
    email: string;
    id: number;
}

export type CardListProps = {
    robots: Robot[];
}

export type SearchBoxProps = {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ScrollProps = {
    children: React.ReactNode; //https://blog.logrocket.com/react-children-prop-typescript/
}