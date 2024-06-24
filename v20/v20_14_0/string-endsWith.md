## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,977,712|7988857|
|(short string) (true) String#slice and strict comparison|20,059,996|10029999|
|(long string) (true) String#endsWith|15,803,772|7901887|
|(long string) (true) String#slice and strict comparison|20,125,502|10062752|
|(short string) (false) String#endsWith|16,391,955|8195978|
|(short string) (false) String#slice and strict comparison|20,061,310|10030656|
|(long string) (false) String#endsWith|16,136,629|8068315|
|(long string) (false) String#slice and strict comparison|20,065,176|10032589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:35:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15977712.210494654,"samples":7988857},{"name":"(short string) (true) String#slice and strict comparison","opsSec":20059996.95693191,"samples":10029999},{"name":"(long string) (true) String#endsWith","opsSec":15803772.198360793,"samples":7901887},{"name":"(long string) (true) String#slice and strict comparison","opsSec":20125502.832660403,"samples":10062752},{"name":"(short string) (false) String#endsWith","opsSec":16391955.442696225,"samples":8195978},{"name":"(short string) (false) String#slice and strict comparison","opsSec":20061310.395082507,"samples":10030656},{"name":"(long string) (false) String#endsWith","opsSec":16136629.06406287,"samples":8068315},{"name":"(long string) (false) String#slice and strict comparison","opsSec":20065176.475071475,"samples":10032589}]}-->
