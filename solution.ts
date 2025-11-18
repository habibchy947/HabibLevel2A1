const formatValue = (value: string | number | boolean): (string | number | boolean) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }
    return value;
};



const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return value;
};



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }


}



const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
    const filteredItems = items.filter((item) => {
        if (item.rating < 0 || item.rating > 5) {
            return false;
        }
        // need to correct
        return item.rating >= 4 && item.rating <= 5;
    })
    return filteredItems;
};



const filterActiveUsers = (users: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[])
    : {
        id: number;
        name: string;
        email: string;
        isActive: boolean;
    }[] => {
    const activeUsers = users.filter((user) => {
        return user.isActive === true;
    })
    return activeUsers;
};



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const printBookDetails = (book: Book): string => {
    const { title, author, publishedYear, isAvailable } = book;
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? 'Yes' : 'No'}`
}



const getUniqueValues = (values1: (number | string)[], values2: (number | string)[]): (number | string)[] => {
    const result: (string | number | any)[] = [];
    
    const processArray = (arr: (number | string)[]) => {
        for(let i = 0; i < arr.length; i++){
            let exist = false;

            for(let j = 0; j < result.length; j++) {
                if(arr[i] === result[j]){
                    exist = true;
                    break;
                }
            }

            if(!exist) {
                result[result.length] = arr[i]
            }
        }
    }
    
    processArray(values1);
    processArray(values2);
    return result;
};



const calculateTotalPrice = (products: { name: string, price: number, quantity: number, discount?: number }[]): number => {
    if (products.length === 0) {
        return 0;
    }
    const totalPrice = products.reduce((acc, product) => {
        const mainPrice = product.price * product.quantity;
        let discountedPrice = mainPrice;

        if (product.discount !== undefined && product.discount > 0 && product.discount <= 100) {
            const discounted = 1 - (product.discount / 100);
            discountedPrice = mainPrice * discounted;
        }

        return acc + discountedPrice;
    }, 0)
    return totalPrice;
}
