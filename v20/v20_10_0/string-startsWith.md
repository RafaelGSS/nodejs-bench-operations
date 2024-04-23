## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|305,484,803|93|
|(short string) (true) String#slice and strict comparison|859,811,080|98|
|(long string) (true) String#startsWith|199,720,353|96|
|(long string) (true) String#slice and strict comparison|855,211,503|97|
|(short string) (false) String#startsWith|880,091,440|96|
|(short string) (false) String#slice and strict comparison|860,013,944|95|
|(long string) (false) String#startsWith|876,550,925|99|
|(long string) (false) String#slice and strict comparison|860,795,666|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":305484803.1347732,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":859811080.2667781,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":199720353.17521846,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":855211502.8773228,"samples":9},{"name":"(short string) (false) String#startsWith","opsSec":880091440.1647048,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":860013943.9383286,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":876550925.3296245,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":860795665.8844006,"samples":7}]}-->
