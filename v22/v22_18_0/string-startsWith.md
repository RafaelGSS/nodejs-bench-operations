## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,069,605|42534812|
|(short string) (true) String#slice and strict comparison|59,724,985|29876519|
|(long string) (true) String#startsWith|65,849,544|32924779|
|(long string) (true) String#slice and strict comparison|54,078,126|27065371|
|(short string) (false) String#startsWith|89,884,565|44942312|
|(short string) (false) String#slice and strict comparison|59,233,849|29616936|
|(long string) (false) String#startsWith|87,662,635|44566926|
|(long string) (false) String#slice and strict comparison|53,691,063|26867738|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:48:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42534812,"opsSec":85069605.79510437},{"name":"(short string) (true) String#slice and strict comparison","samples":29876519,"opsSec":59724985.05506966},{"name":"(long string) (true) String#startsWith","samples":32924779,"opsSec":65849544.9617901},{"name":"(long string) (true) String#slice and strict comparison","samples":27065371,"opsSec":54078126.36248686},{"name":"(short string) (false) String#startsWith","samples":44942312,"opsSec":89884565.75480138},{"name":"(short string) (false) String#slice and strict comparison","samples":29616936,"opsSec":59233849.13573424},{"name":"(long string) (false) String#startsWith","samples":44566926,"opsSec":87662635.92933816},{"name":"(long string) (false) String#slice and strict comparison","samples":26867738,"opsSec":53691063.39665105}]}-->
