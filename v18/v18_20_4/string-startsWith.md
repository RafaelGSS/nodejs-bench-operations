## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|76,757,827|38380116|
|(short string) (true) String#slice and strict comparison|43,936,742|21968399|
|(long string) (true) String#startsWith|47,629,526|23814768|
|(long string) (true) String#slice and strict comparison|36,289,133|18154381|
|(short string) (false) String#startsWith|87,755,514|43877769|
|(short string) (false) String#slice and strict comparison|50,907,939|25469988|
|(long string) (false) String#startsWith|76,878,983|38439574|
|(long string) (false) String#slice and strict comparison|47,152,631|23579613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:41:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":76757827.17727453,"samples":38380116},{"name":"(short string) (true) String#slice and strict comparison","opsSec":43936742.02459066,"samples":21968399},{"name":"(long string) (true) String#startsWith","opsSec":47629526.569353744,"samples":23814768},{"name":"(long string) (true) String#slice and strict comparison","opsSec":36289133.93323819,"samples":18154381},{"name":"(short string) (false) String#startsWith","opsSec":87755514.83254407,"samples":43877769},{"name":"(short string) (false) String#slice and strict comparison","opsSec":50907939.73534043,"samples":25469988},{"name":"(long string) (false) String#startsWith","opsSec":76878983.01770245,"samples":38439574},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47152631.13870368,"samples":23579613}]}-->
