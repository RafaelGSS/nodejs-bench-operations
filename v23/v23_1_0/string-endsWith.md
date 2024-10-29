## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,292,970|57146522|
|(short string) (true) String#slice and strict comparison|56,242,803|28123346|
|(long string) (true) String#endsWith|66,772,793|33386399|
|(long string) (true) String#slice and strict comparison|50,955,372|25477911|
|(short string) (false) String#endsWith|92,801,498|46400752|
|(short string) (false) String#slice and strict comparison|56,760,152|28380086|
|(long string) (false) String#endsWith|85,061,519|42550923|
|(long string) (false) String#slice and strict comparison|51,314,636|25657346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:49:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114292970.39532706,"samples":57146522},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56242803.14761916,"samples":28123346},{"name":"(long string) (true) String#endsWith","opsSec":66772793.05881332,"samples":33386399},{"name":"(long string) (true) String#slice and strict comparison","opsSec":50955372.573613904,"samples":25477911},{"name":"(short string) (false) String#endsWith","opsSec":92801498.06070413,"samples":46400752},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56760152.47450755,"samples":28380086},{"name":"(long string) (false) String#endsWith","opsSec":85061519.69449715,"samples":42550923},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51314636.99070914,"samples":25657346}]}-->
