## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|339,381,944|96|
|(short string) (true) String#slice and strict comparison|952,120,453|99|
|(long string) (true) String#startsWith|223,508,872|95|
|(long string) (true) String#slice and strict comparison|950,462,745|95|
|(short string) (false) String#startsWith|976,237,893|95|
|(short string) (false) String#slice and strict comparison|950,737,747|97|
|(long string) (false) String#startsWith|975,116,722|97|
|(long string) (false) String#slice and strict comparison|949,366,615|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:49:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":339381944.1035982,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":952120452.7211825,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":223508872.2647773,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":950462745.1212003,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":976237892.749297,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":950737747.300065,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":975116721.5798552,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":949366615.2486323,"samples":7}]}-->
