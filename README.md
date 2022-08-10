# Associated Token Account with Anchor Framework

## Authors

- Matías Barrios

## Description

In Solana, an Associated Token Account (ATA) is used to transfer tokens between users. An ATA has an special field called "Authority" which can be used to define an user that has some allowance to transfer tokens in behalf of the owner of the ATA. This Authority has certain balance that decreases everytime she does a transfer. The ATA owner can increase and decrease this allowance at her will.

In this PoC, we are going to show how to manage this Authority, by increasing and decreasing her allowance.

## Steps to reproduce

1. Step 1
2. Step 2
3. Step 3
4. Step 4
5. Step 5
6. Step 6
7. Step 7

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
