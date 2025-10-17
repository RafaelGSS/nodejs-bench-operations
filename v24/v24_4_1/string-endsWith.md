## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|87,742,928|43871515|
|(short string) (true) String#slice and strict comparison|54,342,854|27183583|
|(long string) (true) String#endsWith|64,972,043|32489469|
|(long string) (true) String#slice and strict comparison|50,878,750|25446412|
|(short string) (false) String#endsWith|91,482,174|45749628|
|(short string) (false) String#slice and strict comparison|57,349,142|28682784|
|(long string) (false) String#endsWith|86,604,940|43303822|
|(long string) (false) String#slice and strict comparison|52,471,581|26244525|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:17:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43871515,"opsSec":87742928.56917457},{"name":"(short string) (true) String#slice and strict comparison","samples":27183583,"opsSec":54342854.52848388},{"name":"(long string) (true) String#endsWith","samples":32489469,"opsSec":64972043.426639736},{"name":"(long string) (true) String#slice and strict comparison","samples":25446412,"opsSec":50878750.42884388},{"name":"(short string) (false) String#endsWith","samples":45749628,"opsSec":91482174.08252662},{"name":"(short string) (false) String#slice and strict comparison","samples":28682784,"opsSec":57349142.86138964},{"name":"(long string) (false) String#endsWith","samples":43303822,"opsSec":86604940.36697163},{"name":"(long string) (false) String#slice and strict comparison","samples":26244525,"opsSec":52471581.26610805}]}-->
