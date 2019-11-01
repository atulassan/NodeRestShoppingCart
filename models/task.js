
/*    
create - post
update - put
lists = Get
list = get
delete = delete
*/

Task = {
    create: function (req, res) {
        var data = { "status": 400, "message": "Create now worked" }
        return data;
    },
    update: function (req, res) {
        var data = { "status": 400, "message": "Create now worked" };
        return data;
    },
    delete: function (req, res) {
        var data = { "status": 400, "message": "Create now worked" };
        return data;
    },
    lists: function (req, res) {
        var data = { "status": 400, "message": "Create now worked" };
        return data;
    },
    list: function (req, res) {
        var data = { "status": 400, "message": "Create now worked" };
        return data;
    }
}


module.exports = Task;