export const UserSignin = (Id,Username,Password,Email,Contact) =>
{
    return{
        type:"SIGN_IN",
        payloadId:Id,
        payloadUsername:Username,
        payloadPassword:Password,
        payloadEmail:Email,
        payloadContact:Contact

    }
}