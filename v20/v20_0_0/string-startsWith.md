## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,771,871|44393296|
|(short string) (true) String#slice and strict comparison|63,419,926|31790734|
|(long string) (true) String#startsWith|66,165,767|33082940|
|(long string) (true) String#slice and strict comparison|57,771,785|28890825|
|(short string) (false) String#startsWith|89,429,278|44714649|
|(short string) (false) String#slice and strict comparison|63,409,829|31705550|
|(long string) (false) String#startsWith|92,475,067|46237549|
|(long string) (false) String#slice and strict comparison|57,562,781|28781442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44393296,"opsSec":88771871.84821013},{"name":"(short string) (true) String#slice and strict comparison","samples":31790734,"opsSec":63419926.032807745},{"name":"(long string) (true) String#startsWith","samples":33082940,"opsSec":66165767.1212013},{"name":"(long string) (true) String#slice and strict comparison","samples":28890825,"opsSec":57771785.58315525},{"name":"(short string) (false) String#startsWith","samples":44714649,"opsSec":89429278.50441729},{"name":"(short string) (false) String#slice and strict comparison","samples":31705550,"opsSec":63409829.90110709},{"name":"(long string) (false) String#startsWith","samples":46237549,"opsSec":92475067.85312787},{"name":"(long string) (false) String#slice and strict comparison","samples":28781442,"opsSec":57562781.30799815}]}-->
