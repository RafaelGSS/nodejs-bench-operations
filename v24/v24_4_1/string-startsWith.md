## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|79,976,962|39988514|
|(short string) (true) String#slice and strict comparison|56,031,066|28016250|
|(long string) (true) String#startsWith|65,742,374|32871211|
|(long string) (true) String#slice and strict comparison|50,205,216|25104018|
|(short string) (false) String#startsWith|89,648,200|44824107|
|(short string) (false) String#slice and strict comparison|57,634,109|28817059|
|(long string) (false) String#startsWith|85,828,064|42914052|
|(long string) (false) String#slice and strict comparison|51,866,737|25933375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:25:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":39988514,"opsSec":79976962.25893702},{"name":"(short string) (true) String#slice and strict comparison","samples":28016250,"opsSec":56031066.61325391},{"name":"(long string) (true) String#startsWith","samples":32871211,"opsSec":65742374.796974905},{"name":"(long string) (true) String#slice and strict comparison","samples":25104018,"opsSec":50205216.27423317},{"name":"(short string) (false) String#startsWith","samples":44824107,"opsSec":89648200.01488079},{"name":"(short string) (false) String#slice and strict comparison","samples":28817059,"opsSec":57634109.12434719},{"name":"(long string) (false) String#startsWith","samples":42914052,"opsSec":85828064.34743427},{"name":"(long string) (false) String#slice and strict comparison","samples":25933375,"opsSec":51866737.551982984}]}-->
