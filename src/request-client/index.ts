/**
 * We abstract axios to allow freedom of choice in your request client.
 * 
 * We choose axios for it's popularity and amount of features it provides.
 * Ofcourse you can use older deprecated request if that suits your needs
 * more than axios.
 * 
 * Other clients won't be officially supported unless they are added by outside
 * community.
 */
export * from './axios';