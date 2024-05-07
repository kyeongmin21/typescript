function func(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed());
    }
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (value instanceof Date) {
        console.log(value.getTime());
    }
    else if ('age' in value) {
        console.log(`${value.name}은 ${value.age}살입니다.`);
    }
}
export {};
