interface User {
    name: string;
    role: string;
}

interface Blog {
    title: string;
    description: string;
    data: string;
}

interface ApiResponse<T> {
    data: T;
    success: boolean;
    statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

// const userRes: ApiResponse<User> = { 21 & 22 both are same
const userRes: UserResponse = {
    statusCode: 200,
    success: true,
    data: {
        name: "Rakeeb",
        role: "user",
    },
};
