## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,146,617|61077948|
|(short string) (true) String#slice and strict comparison|59,696,240|29869853|
|(long string) (true) String#startsWith|62,903,575|31451795|
|(long string) (true) String#slice and strict comparison|53,426,829|26717688|
|(short string) (false) String#startsWith|94,245,322|47129362|
|(short string) (false) String#slice and strict comparison|59,344,063|29672041|
|(long string) (false) String#startsWith|81,947,654|40973831|
|(long string) (false) String#slice and strict comparison|52,944,719|26473154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:50:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122146617.98719092,"samples":61077948},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59696240.689583994,"samples":29869853},{"name":"(long string) (true) String#startsWith","opsSec":62903575.15475626,"samples":31451795},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53426829.737461545,"samples":26717688},{"name":"(short string) (false) String#startsWith","opsSec":94245322.88055833,"samples":47129362},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59344063.00989983,"samples":29672041},{"name":"(long string) (false) String#startsWith","opsSec":81947654.6247111,"samples":40973831},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52944719.44663772,"samples":26473154}]}-->
