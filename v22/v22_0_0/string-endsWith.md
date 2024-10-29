## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|122,047,112|61171865|
|(short string) (true) String#slice and strict comparison|49,905,915|24952970|
|(long string) (true) String#endsWith|52,589,651|26294835|
|(long string) (true) String#slice and strict comparison|45,709,130|22854576|
|(short string) (false) String#endsWith|91,028,440|45514234|
|(short string) (false) String#slice and strict comparison|49,803,402|24902913|
|(long string) (false) String#endsWith|84,328,705|42164365|
|(long string) (false) String#slice and strict comparison|45,341,423|22671339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":122047112.06890066,"samples":61171865},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49905915.945348516,"samples":24952970},{"name":"(long string) (true) String#endsWith","opsSec":52589651.38326341,"samples":26294835},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45709130.151035786,"samples":22854576},{"name":"(short string) (false) String#endsWith","opsSec":91028440.50941098,"samples":45514234},{"name":"(short string) (false) String#slice and strict comparison","opsSec":49803402.26762524,"samples":24902913},{"name":"(long string) (false) String#endsWith","opsSec":84328705.88199012,"samples":42164365},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45341423.7655358,"samples":22671339}]}-->
