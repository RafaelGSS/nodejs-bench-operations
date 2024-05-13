## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,138,877|7069439|
|(short string) (true) String#slice and strict comparison|15,533,805|7766904|
|(long string) (true) String#endsWith|13,923,301|6961651|
|(long string) (true) String#slice and strict comparison|15,610,173|7805087|
|(short string) (false) String#endsWith|14,731,307|7365654|
|(short string) (false) String#slice and strict comparison|15,078,548|7539275|
|(long string) (false) String#endsWith|15,057,272|7528637|
|(long string) (false) String#slice and strict comparison|14,433,867|7216935|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14138877.773771191,"samples":7069439},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15533805.8252695,"samples":7766904},{"name":"(long string) (true) String#endsWith","opsSec":13923301.108904073,"samples":6961651},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15610173.906323818,"samples":7805087},{"name":"(short string) (false) String#endsWith","opsSec":14731307.14552859,"samples":7365654},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15078548.974701108,"samples":7539275},{"name":"(long string) (false) String#endsWith","opsSec":15057272.584579855,"samples":7528637},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14433867.69067228,"samples":7216935}]}-->
