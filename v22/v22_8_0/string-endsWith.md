## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|118,751,371|59375738|
|(short string) (true) String#slice and strict comparison|56,626,678|28313358|
|(long string) (true) String#endsWith|64,644,393|32329418|
|(long string) (true) String#slice and strict comparison|52,076,491|26038253|
|(short string) (false) String#endsWith|88,223,553|44120767|
|(short string) (false) String#slice and strict comparison|57,051,942|28532135|
|(long string) (false) String#endsWith|87,667,908|43836463|
|(long string) (false) String#slice and strict comparison|51,137,068|25568544|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":118751371.26129055,"samples":59375738},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56626678.852898665,"samples":28313358},{"name":"(long string) (true) String#endsWith","opsSec":64644393.408202305,"samples":32329418},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52076491.93934718,"samples":26038253},{"name":"(short string) (false) String#endsWith","opsSec":88223553.3340421,"samples":44120767},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57051942.558563605,"samples":28532135},{"name":"(long string) (false) String#endsWith","opsSec":87667908.06427823,"samples":43836463},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51137068.26109165,"samples":25568544}]}-->
