## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,579,138|26289645|
|(short string) (true) String#slice and strict comparison|51,706,492|25853276|
|(long string) (true) String#endsWith|50,910,098|25455137|
|(long string) (true) String#slice and strict comparison|44,819,336|22415846|
|(short string) (false) String#endsWith|57,577,424|28807851|
|(short string) (false) String#slice and strict comparison|61,337,951|30673865|
|(long string) (false) String#endsWith|56,078,081|28044933|
|(long string) (false) String#slice and strict comparison|53,171,700|26585883|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:57:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26289645,"opsSec":52579138.99271281},{"name":"(short string) (true) String#slice and strict comparison","samples":25853276,"opsSec":51706492.22729499},{"name":"(long string) (true) String#endsWith","samples":25455137,"opsSec":50910098.56380035},{"name":"(long string) (true) String#slice and strict comparison","samples":22415846,"opsSec":44819336.384622835},{"name":"(short string) (false) String#endsWith","samples":28807851,"opsSec":57577424.182938635},{"name":"(short string) (false) String#slice and strict comparison","samples":30673865,"opsSec":61337951.62642762},{"name":"(long string) (false) String#endsWith","samples":28044933,"opsSec":56078081.97616586},{"name":"(long string) (false) String#slice and strict comparison","samples":26585883,"opsSec":53171700.811494805}]}-->
