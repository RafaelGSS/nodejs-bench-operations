## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|89,320,601|44660913|
|(short string) (true) String#slice and strict comparison|61,013,685|30511298|
|(long string) (true) String#endsWith|60,208,266|30104142|
|(long string) (true) String#slice and strict comparison|54,659,479|27329763|
|(short string) (false) String#endsWith|94,640,460|47320250|
|(short string) (false) String#slice and strict comparison|60,558,096|30279065|
|(long string) (false) String#endsWith|85,861,100|42930560|
|(long string) (false) String#slice and strict comparison|54,391,607|27201910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:57:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44660913,"opsSec":89320601.95047088},{"name":"(short string) (true) String#slice and strict comparison","samples":30511298,"opsSec":61013685.439351074},{"name":"(long string) (true) String#endsWith","samples":30104142,"opsSec":60208266.539602704},{"name":"(long string) (true) String#slice and strict comparison","samples":27329763,"opsSec":54659479.320804656},{"name":"(short string) (false) String#endsWith","samples":47320250,"opsSec":94640460.06172585},{"name":"(short string) (false) String#slice and strict comparison","samples":30279065,"opsSec":60558096.69304682},{"name":"(long string) (false) String#endsWith","samples":42930560,"opsSec":85861100.76711342},{"name":"(long string) (false) String#slice and strict comparison","samples":27201910,"opsSec":54391607.996172704}]}-->
