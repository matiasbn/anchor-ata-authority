# Associated Token Account with Anchor Framework

## Authors

- Matías Barrios

## Description

In Solana, an Associated Token Account (ATA) is used to transfer tokens between users. An ATA has a particular field called "Authority," which can be used to define a user that has some allowance to transfer tokens on behalf of the owner of the ATA. This Authority has a certain balance that decreases every time she does a transfer. The ATA owner can increase and reduce this allowance at her will.
In this PoC, we will show how to manage this Authority by increasing and decreasing her allocation and changing the Authority address, all while using the Anchor framework.

## Steps to reproduce

1. Create a function to initialize a Token Mint.
2. Create a function to create an ATA and set the Authority to a user.
3. Create a function to assign the Authority's allowance.
4. Create a function to change the ATA's Authority.
5. Execute the function 1. and review the logs
6. Execute function 2., and then transfer by using the Authority to another user's ATA.
7. Execute the function 3., and then
8. Step 7

## How to run

You can run the test with cargo test:

```shell
cargo test
```

To check the `println!` macros of the test, run the test showing the outputs:

```shell
cargo test -- --nocapture
```

## Conclusions

1.

## TODO to finish PoC

- [ ] Paste "Steps to reproduce" into the code to show where the steps are executed
- [ ] Cargo fix the code by running `cargo fix`. Fix the imports that cargo fix is going to delete.
- [ ] Trim the dependencies of the Cargo.toml file
- [ ] Change the test function from `test_your_poc` to `test_your_poc_tag` e.g. `test_borsh_serialization`
- [ ] Mark the PoC as finished into the main README.md
