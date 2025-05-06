## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,336,977|44668499|
|(short string) (true) String#slice and strict comparison|63,606,540|31818712|
|(long string) (true) String#startsWith|63,582,166|31792209|
|(long string) (true) String#slice and strict comparison|59,000,794|29500667|
|(short string) (false) String#startsWith|98,418,138|49209096|
|(short string) (false) String#slice and strict comparison|62,989,217|31494617|
|(long string) (false) String#startsWith|91,368,595|45685990|
|(long string) (false) String#slice and strict comparison|58,071,566|29035792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:20:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44668499,"opsSec":89336977.6311691},{"name":"(short string) (true) String#slice and strict comparison","samples":31818712,"opsSec":63606540.22603249},{"name":"(long string) (true) String#startsWith","samples":31792209,"opsSec":63582166.80980193},{"name":"(long string) (true) String#slice and strict comparison","samples":29500667,"opsSec":59000794.02473308},{"name":"(short string) (false) String#startsWith","samples":49209096,"opsSec":98418138.06686033},{"name":"(short string) (false) String#slice and strict comparison","samples":31494617,"opsSec":62989217.87476022},{"name":"(long string) (false) String#startsWith","samples":45685990,"opsSec":91368595.88994542},{"name":"(long string) (false) String#slice and strict comparison","samples":29035792,"opsSec":58071566.92695933}]}-->
