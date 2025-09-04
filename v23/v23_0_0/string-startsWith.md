## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,594,532|42297514|
|(short string) (true) String#slice and strict comparison|55,917,188|27958596|
|(long string) (true) String#startsWith|66,902,268|33451139|
|(long string) (true) String#slice and strict comparison|52,351,923|26180113|
|(short string) (false) String#startsWith|93,772,110|46891196|
|(short string) (false) String#slice and strict comparison|57,709,375|28860947|
|(long string) (false) String#startsWith|84,374,064|42187053|
|(long string) (false) String#slice and strict comparison|51,298,496|25649257|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:48:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42297514,"opsSec":84594532.78360508},{"name":"(short string) (true) String#slice and strict comparison","samples":27958596,"opsSec":55917188.98047179},{"name":"(long string) (true) String#startsWith","samples":33451139,"opsSec":66902268.7674869},{"name":"(long string) (true) String#slice and strict comparison","samples":26180113,"opsSec":52351923.92719977},{"name":"(short string) (false) String#startsWith","samples":46891196,"opsSec":93772110.82576907},{"name":"(short string) (false) String#slice and strict comparison","samples":28860947,"opsSec":57709375.566833295},{"name":"(long string) (false) String#startsWith","samples":42187053,"opsSec":84374064.31921223},{"name":"(long string) (false) String#slice and strict comparison","samples":25649257,"opsSec":51298496.04552638}]}-->
