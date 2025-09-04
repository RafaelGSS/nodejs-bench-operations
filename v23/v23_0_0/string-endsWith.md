## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|75,922,235|37976923|
|(short string) (true) String#slice and strict comparison|53,873,893|26941348|
|(long string) (true) String#endsWith|64,126,782|32063406|
|(long string) (true) String#slice and strict comparison|50,007,775|25003894|
|(short string) (false) String#endsWith|87,355,276|43677708|
|(short string) (false) String#slice and strict comparison|55,179,031|27594892|
|(long string) (false) String#endsWith|82,286,546|41158115|
|(long string) (false) String#slice and strict comparison|50,421,868|25221622|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":37976923,"opsSec":75922235.77713418},{"name":"(short string) (true) String#slice and strict comparison","samples":26941348,"opsSec":53873893.9754545},{"name":"(long string) (true) String#endsWith","samples":32063406,"opsSec":64126782.75818706},{"name":"(long string) (true) String#slice and strict comparison","samples":25003894,"opsSec":50007775.79810271},{"name":"(short string) (false) String#endsWith","samples":43677708,"opsSec":87355276.58097859},{"name":"(short string) (false) String#slice and strict comparison","samples":27594892,"opsSec":55179031.37251451},{"name":"(long string) (false) String#endsWith","samples":41158115,"opsSec":82286546.60946846},{"name":"(long string) (false) String#slice and strict comparison","samples":25221622,"opsSec":50421868.05241412}]}-->
