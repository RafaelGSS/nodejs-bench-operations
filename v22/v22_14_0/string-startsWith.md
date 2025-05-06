## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|91,528,271|45776487|
|(short string) (true) String#slice and strict comparison|59,095,538|29554928|
|(long string) (true) String#startsWith|63,695,224|31847618|
|(long string) (true) String#slice and strict comparison|53,869,706|26950445|
|(short string) (false) String#startsWith|95,839,323|47924978|
|(short string) (false) String#slice and strict comparison|60,818,988|30418847|
|(long string) (false) String#startsWith|81,491,817|40757548|
|(long string) (false) String#slice and strict comparison|54,646,050|27346530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:17:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":45776487,"opsSec":91528271.06880814},{"name":"(short string) (true) String#slice and strict comparison","samples":29554928,"opsSec":59095538.33297269},{"name":"(long string) (true) String#startsWith","samples":31847618,"opsSec":63695224.28007874},{"name":"(long string) (true) String#slice and strict comparison","samples":26950445,"opsSec":53869706.87373965},{"name":"(short string) (false) String#startsWith","samples":47924978,"opsSec":95839323.77709882},{"name":"(short string) (false) String#slice and strict comparison","samples":30418847,"opsSec":60818988.633493856},{"name":"(long string) (false) String#startsWith","samples":40757548,"opsSec":81491817.37341638},{"name":"(long string) (false) String#slice and strict comparison","samples":27346530,"opsSec":54646050.95325167}]}-->
