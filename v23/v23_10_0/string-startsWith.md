## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,182,140|43636068|
|(short string) (true) String#slice and strict comparison|51,429,503|25723806|
|(long string) (true) String#startsWith|60,750,961|30381678|
|(long string) (true) String#slice and strict comparison|50,671,111|25452895|
|(short string) (false) String#startsWith|86,053,471|43036260|
|(short string) (false) String#slice and strict comparison|53,397,838|26712129|
|(long string) (false) String#startsWith|80,748,631|40391821|
|(long string) (false) String#slice and strict comparison|50,934,234|25471769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43636068,"opsSec":87182140.31765002},{"name":"(short string) (true) String#slice and strict comparison","samples":25723806,"opsSec":51429503.05482036},{"name":"(long string) (true) String#startsWith","samples":30381678,"opsSec":60750961.710293785},{"name":"(long string) (true) String#slice and strict comparison","samples":25452895,"opsSec":50671111.913625464},{"name":"(short string) (false) String#startsWith","samples":43036260,"opsSec":86053471.37568323},{"name":"(short string) (false) String#slice and strict comparison","samples":26712129,"opsSec":53397838.88523314},{"name":"(long string) (false) String#startsWith","samples":40391821,"opsSec":80748631.0085673},{"name":"(long string) (false) String#slice and strict comparison","samples":25471769,"opsSec":50934234.454602994}]}-->
