import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorAtaAuthority } from "../target/types/anchor_ata_authority";

describe("anchor-ata-authority", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorAtaAuthority as Program<AnchorAtaAuthority>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
