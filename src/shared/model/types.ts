export interface Tag {
  slug: string;
  url: string;
}

export interface User {
  id: number
  username: string
  image: string
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string
  address: {
    address: string
    city: string
    state: string
  }
  company: {
    name: string
    title: string
  }
}
