## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|69,338,510|34689457|
|(short string) (true) String#slice and strict comparison|51,312,156|25662834|
|(long string) (true) String#startsWith|53,997,539|26998777|
|(long string) (true) String#slice and strict comparison|45,218,666|22617758|
|(short string) (false) String#startsWith|102,890,992|51455415|
|(short string) (false) String#slice and strict comparison|60,666,419|30346580|
|(long string) (false) String#startsWith|87,911,556|43955790|
|(long string) (false) String#slice and strict comparison|52,935,694|26467857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34689457,"opsSec":69338510.8657496},{"name":"(short string) (true) String#slice and strict comparison","samples":25662834,"opsSec":51312156.58555221},{"name":"(long string) (true) String#startsWith","samples":26998777,"opsSec":53997539.09667921},{"name":"(long string) (true) String#slice and strict comparison","samples":22617758,"opsSec":45218666.62044389},{"name":"(short string) (false) String#startsWith","samples":51455415,"opsSec":102890992.61662352},{"name":"(short string) (false) String#slice and strict comparison","samples":30346580,"opsSec":60666419.21307358},{"name":"(long string) (false) String#startsWith","samples":43955790,"opsSec":87911556.08805674},{"name":"(long string) (false) String#slice and strict comparison","samples":26467857,"opsSec":52935694.73140712}]}-->
