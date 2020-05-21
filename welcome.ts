console.log('Hello world deno')

const url = Deno.args[0]
const res = await fetch(url)

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

const listener = Deno.listen({ port: 3001 });
console.log("listening on 0.0.0.0:3001");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}