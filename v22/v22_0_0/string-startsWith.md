## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,410,633|42238445|
|(short string) (true) String#slice and strict comparison|57,242,602|28621438|
|(long string) (true) String#startsWith|64,094,541|32049043|
|(long string) (true) String#slice and strict comparison|52,588,540|26299808|
|(short string) (false) String#startsWith|90,661,961|45337328|
|(short string) (false) String#slice and strict comparison|58,394,219|29203769|
|(long string) (false) String#startsWith|84,190,907|42095476|
|(long string) (false) String#slice and strict comparison|52,724,148|26367012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:49:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42238445,"opsSec":84410633.56139866},{"name":"(short string) (true) String#slice and strict comparison","samples":28621438,"opsSec":57242602.38036062},{"name":"(long string) (true) String#startsWith","samples":32049043,"opsSec":64094541.0591231},{"name":"(long string) (true) String#slice and strict comparison","samples":26299808,"opsSec":52588540.327521615},{"name":"(short string) (false) String#startsWith","samples":45337328,"opsSec":90661961.51214908},{"name":"(short string) (false) String#slice and strict comparison","samples":29203769,"opsSec":58394219.79671408},{"name":"(long string) (false) String#startsWith","samples":42095476,"opsSec":84190907.21043736},{"name":"(long string) (false) String#slice and strict comparison","samples":26367012,"opsSec":52724148.13436466}]}-->
