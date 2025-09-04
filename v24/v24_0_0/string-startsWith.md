## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,561,903|42280959|
|(short string) (true) String#slice and strict comparison|55,676,263|27853020|
|(long string) (true) String#startsWith|66,699,382|33349802|
|(long string) (true) String#slice and strict comparison|50,783,521|25401662|
|(short string) (false) String#startsWith|90,782,631|45395417|
|(short string) (false) String#slice and strict comparison|56,383,795|28192079|
|(long string) (false) String#startsWith|86,034,025|43017027|
|(long string) (false) String#slice and strict comparison|50,269,662|25152536|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:49:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42280959,"opsSec":84561903.28622884},{"name":"(short string) (true) String#slice and strict comparison","samples":27853020,"opsSec":55676263.5547832},{"name":"(long string) (true) String#startsWith","samples":33349802,"opsSec":66699382.958244875},{"name":"(long string) (true) String#slice and strict comparison","samples":25401662,"opsSec":50783521.879746385},{"name":"(short string) (false) String#startsWith","samples":45395417,"opsSec":90782631.60766898},{"name":"(short string) (false) String#slice and strict comparison","samples":28192079,"opsSec":56383795.90326271},{"name":"(long string) (false) String#startsWith","samples":43017027,"opsSec":86034025.26463555},{"name":"(long string) (false) String#slice and strict comparison","samples":25152536,"opsSec":50269662.954268955}]}-->
