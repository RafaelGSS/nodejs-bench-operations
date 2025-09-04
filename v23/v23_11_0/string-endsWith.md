## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,451,094|41248213|
|(short string) (true) String#slice and strict comparison|58,132,468|29076236|
|(long string) (true) String#endsWith|64,531,662|32265847|
|(long string) (true) String#slice and strict comparison|52,803,841|26404934|
|(short string) (false) String#endsWith|88,500,599|44257022|
|(short string) (false) String#slice and strict comparison|57,928,112|28971399|
|(long string) (false) String#endsWith|81,727,527|40864295|
|(long string) (false) String#slice and strict comparison|52,895,320|26447665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41248213,"opsSec":82451094.22349373},{"name":"(short string) (true) String#slice and strict comparison","samples":29076236,"opsSec":58132468.26887387},{"name":"(long string) (true) String#endsWith","samples":32265847,"opsSec":64531662.76667522},{"name":"(long string) (true) String#slice and strict comparison","samples":26404934,"opsSec":52803841.18078299},{"name":"(short string) (false) String#endsWith","samples":44257022,"opsSec":88500599.69689885},{"name":"(short string) (false) String#slice and strict comparison","samples":28971399,"opsSec":57928112.06502927},{"name":"(long string) (false) String#endsWith","samples":40864295,"opsSec":81727527.37868902},{"name":"(long string) (false) String#slice and strict comparison","samples":26447665,"opsSec":52895320.58463293}]}-->
