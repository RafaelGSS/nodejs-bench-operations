## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,425,166|43226212|
|(short string) (true) String#slice and strict comparison|56,250,477|28125250|
|(long string) (true) String#startsWith|67,744,806|33872416|
|(long string) (true) String#slice and strict comparison|51,799,690|25912279|
|(short string) (false) String#startsWith|90,876,510|45451716|
|(short string) (false) String#slice and strict comparison|56,517,623|28258822|
|(long string) (false) String#startsWith|87,412,485|43706271|
|(long string) (false) String#slice and strict comparison|49,824,255|24912136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:22:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43226212,"opsSec":86425166.3667796},{"name":"(short string) (true) String#slice and strict comparison","samples":28125250,"opsSec":56250477.724810824},{"name":"(long string) (true) String#startsWith","samples":33872416,"opsSec":67744806.39246319},{"name":"(long string) (true) String#slice and strict comparison","samples":25912279,"opsSec":51799690.31547149},{"name":"(short string) (false) String#startsWith","samples":45451716,"opsSec":90876510.01566088},{"name":"(short string) (false) String#slice and strict comparison","samples":28258822,"opsSec":56517623.20151466},{"name":"(long string) (false) String#startsWith","samples":43706271,"opsSec":87412485.00705978},{"name":"(long string) (false) String#slice and strict comparison","samples":24912136,"opsSec":49824255.458347194}]}-->
