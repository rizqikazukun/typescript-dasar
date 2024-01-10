export const sayHello = (name?: string | undefined) => {

    if (name) {
        console.log(`Hello ${name}!`)
    } else {
        console.log(`Hello There!`) 
    }

}