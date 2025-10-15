## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,592,657|43296354|
|(short string) (true) String#slice and strict comparison|56,182,618|28091336|
|(long string) (true) String#startsWith|65,504,897|32754131|
|(long string) (true) String#slice and strict comparison|51,848,358|25928608|
|(short string) (false) String#startsWith|92,153,336|46083176|
|(short string) (false) String#slice and strict comparison|56,384,825|28192422|
|(long string) (false) String#startsWith|81,361,083|40682103|
|(long string) (false) String#slice and strict comparison|50,595,455|25297751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:07:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43296354,"opsSec":86592657.25670284},{"name":"(short string) (true) String#slice and strict comparison","samples":28091336,"opsSec":56182618.06468666},{"name":"(long string) (true) String#startsWith","samples":32754131,"opsSec":65504897.01344042},{"name":"(long string) (true) String#slice and strict comparison","samples":25928608,"opsSec":51848358.4338386},{"name":"(short string) (false) String#startsWith","samples":46083176,"opsSec":92153336.99990882},{"name":"(short string) (false) String#slice and strict comparison","samples":28192422,"opsSec":56384825.73131647},{"name":"(long string) (false) String#startsWith","samples":40682103,"opsSec":81361083.03618874},{"name":"(long string) (false) String#slice and strict comparison","samples":25297751,"opsSec":50595455.75575344}]}-->
