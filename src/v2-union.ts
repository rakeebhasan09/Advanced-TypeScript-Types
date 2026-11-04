// Literal Type
type Status = "pending";
const status: Status = "pending";

// Basic Union
type Identity = string | number;
const id: Identity = 256252;

// Literal Union
type Role = "user" | "admin";
const userRole: Role = "admin";

// Object Union
type Admin = { id: number; role: "admin"; privilages: string[] };
type Member = { id: number; role: "member"; plane: string[] };

type User = Admin | Member;
const user: User = { id: 2568, role: "member", plane: ["abd", "def", "ghi"] };
