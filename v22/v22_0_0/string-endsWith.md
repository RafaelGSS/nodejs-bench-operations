## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|118,476,167|59238098|
|(short string) (true) String#slice and strict comparison|59,323,132|29696584|
|(long string) (true) String#endsWith|62,399,327|31200312|
|(long string) (true) String#slice and strict comparison|53,365,563|26688752|
|(short string) (false) String#endsWith|95,166,578|47588434|
|(short string) (false) String#slice and strict comparison|59,351,537|29677552|
|(long string) (false) String#endsWith|88,698,131|44350031|
|(long string) (false) String#slice and strict comparison|52,543,801|26277054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:47:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":118476167.09181523,"samples":59238098},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59323132.414979786,"samples":29696584},{"name":"(long string) (true) String#endsWith","opsSec":62399327.34197783,"samples":31200312},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53365563.77529866,"samples":26688752},{"name":"(short string) (false) String#endsWith","opsSec":95166578.58952291,"samples":47588434},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59351537.92219548,"samples":29677552},{"name":"(long string) (false) String#endsWith","opsSec":88698131.04168722,"samples":44350031},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52543801.84853022,"samples":26277054}]}-->
