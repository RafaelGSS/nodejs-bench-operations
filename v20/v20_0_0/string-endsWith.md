## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,412,442|27209768|
|(short string) (true) String#slice and strict comparison|64,154,693|32078960|
|(long string) (true) String#endsWith|50,702,267|25358075|
|(long string) (true) String#slice and strict comparison|59,500,887|29750463|
|(short string) (false) String#endsWith|58,891,345|29467243|
|(short string) (false) String#slice and strict comparison|63,906,823|31953420|
|(long string) (false) String#endsWith|53,889,303|26946837|
|(long string) (false) String#slice and strict comparison|58,654,318|29351324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:56:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27209768,"opsSec":54412442.576335974},{"name":"(short string) (true) String#slice and strict comparison","samples":32078960,"opsSec":64154693.66045582},{"name":"(long string) (true) String#endsWith","samples":25358075,"opsSec":50702267.71909851},{"name":"(long string) (true) String#slice and strict comparison","samples":29750463,"opsSec":59500887.80043003},{"name":"(short string) (false) String#endsWith","samples":29467243,"opsSec":58891345.96898927},{"name":"(short string) (false) String#slice and strict comparison","samples":31953420,"opsSec":63906823.89548038},{"name":"(long string) (false) String#endsWith","samples":26946837,"opsSec":53889303.1464004},{"name":"(long string) (false) String#slice and strict comparison","samples":29351324,"opsSec":58654318.601102255}]}-->
