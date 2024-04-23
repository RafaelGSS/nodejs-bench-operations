## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|274,717,673|96|
|(short string) (true) String#slice and strict comparison|820,169,731|98|
|(long string) (true) String#endsWith|174,109,594|94|
|(long string) (true) String#slice and strict comparison|820,036,478|96|
|(short string) (false) String#endsWith|784,235,597|99|
|(short string) (false) String#slice and strict comparison|820,335,360|94|
|(long string) (false) String#endsWith|782,895,808|97|
|(long string) (false) String#slice and strict comparison|821,820,022|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":274717673.0623445,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820169731.1489521,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":174109594.10330433,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":820036478.4443415,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":784235597.1647754,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820335360.3709838,"samples":9},{"name":"(long string) (false) String#endsWith","opsSec":782895808.2790543,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":821820022.310568,"samples":10}]}-->
