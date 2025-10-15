## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,134,253|44074492|
|(short string) (true) String#slice and strict comparison|55,678,599|27839324|
|(long string) (true) String#endsWith|67,418,581|33709304|
|(long string) (true) String#slice and strict comparison|51,404,226|25705819|
|(short string) (false) String#endsWith|91,537,941|45768980|
|(short string) (false) String#slice and strict comparison|55,897,985|27948999|
|(long string) (false) String#endsWith|86,568,431|43287932|
|(long string) (false) String#slice and strict comparison|50,389,565|25194793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44074492,"opsSec":88134253.2409133},{"name":"(short string) (true) String#slice and strict comparison","samples":27839324,"opsSec":55678599.55961838},{"name":"(long string) (true) String#endsWith","samples":33709304,"opsSec":67418581.57191603},{"name":"(long string) (true) String#slice and strict comparison","samples":25705819,"opsSec":51404226.0246495},{"name":"(short string) (false) String#endsWith","samples":45768980,"opsSec":91537941.50933582},{"name":"(short string) (false) String#slice and strict comparison","samples":27948999,"opsSec":55897985.702443145},{"name":"(long string) (false) String#endsWith","samples":43287932,"opsSec":86568431.06137222},{"name":"(long string) (false) String#slice and strict comparison","samples":25194793,"opsSec":50389565.03794094}]}-->
