## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|87,273,514|43636765|
|(short string) (true) String#slice and strict comparison|61,135,862|30567938|
|(long string) (true) String#endsWith|65,808,958|32904499|
|(long string) (true) String#slice and strict comparison|54,917,765|27459547|
|(short string) (false) String#endsWith|94,147,561|47076606|
|(short string) (false) String#slice and strict comparison|61,116,405|30559253|
|(long string) (false) String#endsWith|89,269,030|44638492|
|(long string) (false) String#slice and strict comparison|54,871,387|27440310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:10:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43636765,"opsSec":87273514.81440842},{"name":"(short string) (true) String#slice and strict comparison","samples":30567938,"opsSec":61135862.06102345},{"name":"(long string) (true) String#endsWith","samples":32904499,"opsSec":65808958.25138921},{"name":"(long string) (true) String#slice and strict comparison","samples":27459547,"opsSec":54917765.5392516},{"name":"(short string) (false) String#endsWith","samples":47076606,"opsSec":94147561.07508916},{"name":"(short string) (false) String#slice and strict comparison","samples":30559253,"opsSec":61116405.30691679},{"name":"(long string) (false) String#endsWith","samples":44638492,"opsSec":89269030.66498193},{"name":"(long string) (false) String#slice and strict comparison","samples":27440310,"opsSec":54871387.01119318}]}-->
