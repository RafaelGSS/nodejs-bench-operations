## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|69,024,250|34512128|
|(short string) (true) String#slice and strict comparison|51,602,257|25806811|
|(long string) (true) String#startsWith|53,970,937|26998362|
|(long string) (true) String#slice and strict comparison|44,660,706|22335164|
|(short string) (false) String#startsWith|101,589,792|50794908|
|(short string) (false) String#slice and strict comparison|60,825,203|30416702|
|(long string) (false) String#startsWith|87,792,583|43911703|
|(long string) (false) String#slice and strict comparison|53,105,005|26552523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34512128,"opsSec":69024250.47805996},{"name":"(short string) (true) String#slice and strict comparison","samples":25806811,"opsSec":51602257.73798288},{"name":"(long string) (true) String#startsWith","samples":26998362,"opsSec":53970937.76535447},{"name":"(long string) (true) String#slice and strict comparison","samples":22335164,"opsSec":44660706.5653418},{"name":"(short string) (false) String#startsWith","samples":50794908,"opsSec":101589792.02480908},{"name":"(short string) (false) String#slice and strict comparison","samples":30416702,"opsSec":60825203.546057925},{"name":"(long string) (false) String#startsWith","samples":43911703,"opsSec":87792583.07759246},{"name":"(long string) (false) String#slice and strict comparison","samples":26552523,"opsSec":53105005.85261558}]}-->
