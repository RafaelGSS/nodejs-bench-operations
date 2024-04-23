## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|306,671,166|97|
|(short string) (true) String#slice and String#indexOf|855,416,662|97|
|(short string) (true) String#slice and strict comparison|855,642,198|98|
|(long string) (true) String#startsWith|198,721,770|92|
|(long string) (true) String#slice and strict comparison|856,472,586|100|
|(short string) (false) String#startsWith|875,535,622|92|
|(short string) (false) String#slice and strict comparison|855,199,028|98|
|(long string) (false) String#startsWith|872,823,933|99|
|(long string) (false) String#slice and strict comparison|855,112,001|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":306671165.8228685,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":855416662.1798198,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":855642197.6850227,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":198721770.25388014,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":856472586.001884,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":875535621.5337031,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":855199027.9477991,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":872823932.891291,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":855112001.3764297,"samples":7}]}-->
