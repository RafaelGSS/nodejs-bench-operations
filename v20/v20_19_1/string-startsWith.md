## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,598,609|44300282|
|(short string) (true) String#slice and strict comparison|61,186,361|30593228|
|(long string) (true) String#startsWith|63,612,492|31806279|
|(long string) (true) String#slice and strict comparison|59,144,012|29583394|
|(short string) (false) String#startsWith|100,309,202|50154621|
|(short string) (false) String#slice and strict comparison|63,311,056|31663133|
|(long string) (false) String#startsWith|83,439,133|41720451|
|(long string) (false) String#slice and strict comparison|57,952,557|28984170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44300282,"opsSec":88598609.5146741},{"name":"(short string) (true) String#slice and strict comparison","samples":30593228,"opsSec":61186361.77300287},{"name":"(long string) (true) String#startsWith","samples":31806279,"opsSec":63612492.6063576},{"name":"(long string) (true) String#slice and strict comparison","samples":29583394,"opsSec":59144012.11408696},{"name":"(short string) (false) String#startsWith","samples":50154621,"opsSec":100309202.67879255},{"name":"(short string) (false) String#slice and strict comparison","samples":31663133,"opsSec":63311056.27846178},{"name":"(long string) (false) String#startsWith","samples":41720451,"opsSec":83439133.0903785},{"name":"(long string) (false) String#slice and strict comparison","samples":28984170,"opsSec":57952557.895813346}]}-->
