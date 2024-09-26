## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,567,010|6783506|
|(short string) (true) String#slice and strict comparison|12,014,351|6007176|
|(long string) (true) String#startsWith|12,949,807|6474904|
|(long string) (true) String#slice and strict comparison|11,817,970|5908986|
|(short string) (false) String#startsWith|14,285,559|7142780|
|(short string) (false) String#slice and strict comparison|12,310,159|6155080|
|(long string) (false) String#startsWith|14,228,109|7114055|
|(long string) (false) String#slice and strict comparison|11,822,858|5911430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13567010.511262754,"samples":6783506},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12014351.9967775,"samples":6007176},{"name":"(long string) (true) String#startsWith","opsSec":12949807.424475422,"samples":6474904},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11817970.645603474,"samples":5908986},{"name":"(short string) (false) String#startsWith","opsSec":14285559.051125653,"samples":7142780},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12310159.638998596,"samples":6155080},{"name":"(long string) (false) String#startsWith","opsSec":14228109.769327292,"samples":7114055},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11822858.429758294,"samples":5911430}]}-->
