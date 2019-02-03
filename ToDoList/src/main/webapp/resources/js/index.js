window.onload = function() {
	selectItem();
}

/* TASK SELECT */
function selectItem() {
	var listGroup = document.getElementById('listGroup');

	$.ajax({
				type : 'get',
				url : '/task/select',
				headers : {
					"Content-Type" : "application/json"
				},
				dataType : 'json',
				success : function(taskList) {
					var html = '';
					var length = taskList.length;
					for (var i = 0; i < length; i++) {
						html += '<div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">';
						html += '<div class="flex-fill p-2">';
						html += '<span id="ct' + taskList[i].id + '">' + taskList[i].content + '</span>';
						html += '<textarea style="width: 100%; display:none; resize:none;" id="ci' + taskList[i].id + '">' + taskList[i].content.replace(/(<br>|<br\/>|<br \/>)/g, '\r\n') + '</textarea>';
						html += '<button style="display:none" type="button" class="btn btn-success btn-sm mt-1 mb-1 mr-1 task-update-item" id="cbs' + taskList[i].id + '">수정</button>';
						html += '<button style="display:none" type="button" class="btn btn-danger btn-sm mt-1 mb-1 task-update-hide" id="cbc' + taskList[i].id + '">취소</button>'
						html += '<p>';
						html += '<small>' + taskList[i].insert_date
								+ '</small>';
						html += '</p>';
						html += '<div class="badge ' + taskList[i].color
								+ ' badge-pill">' + taskList[i].elapse
								+ '</div>';
						html += '</div>';
						html += '<div class="p-2">';
						html += '<i id="' + taskList[i].id + '" class="fas fa-pencil-alt task-update-show"></i>&nbsp;&nbsp;'
						html += '<i id="' + taskList[i].id + '" class="fas fa-trash-alt task-delete-item"></i>';
						html += '</div>';
						html += '</div>';
					}
					listGroup.innerHTML = html;

					var taskDeleteItems = document.getElementsByClassName('task-delete-item');
					for (var i = 0; i < taskDeleteItems.length; i++) {
						taskDeleteItems[i].addEventListener('click', deleteItem);
					}

					var taskUpdateShows = document.getElementsByClassName('task-update-show');
					for (var i = 0; i < taskUpdateShows.length; i++) {
						taskUpdateShows[i].addEventListener('click', updateShow);
					}

					var taskUpdateHides = document.getElementsByClassName('task-update-hide');
					for (var i = 0; i < taskUpdateHides.length; i++) {
						taskUpdateHides[i].addEventListener('click', updateHide);
					}

					var taskUpdateItems = document.getElementsByClassName('task-update-item');
					for (var i = 0; i < taskUpdateItems.length; i++) {
						taskUpdateItems[i].addEventListener('click', updateItem);
					}
				}
			});
}

/* TASK INSERT */
var taskInsert = document.getElementById('task-insert');

function insertItem() {
	var taskContent = document.getElementById('task-content');
	var content = taskContent.value.replace(/(?:\r\n|\r|\n)/g, '<br>');

	if(content == ''){
		alert("내용을 입력해주세요.");
		return false;
	}
		
	$.ajax({
		type : 'post',
		url : '/task/insert',
		headers : {
			"Content-Type" : "application/json",
			"X-HTTP-Method-Override" : "POST"
		},
		dataType : 'text',
		data : JSON.stringify({
			content : content
		}),
		success : function(result) {
			if (result.toUpperCase() == 'SUCCESS') {
				alert("등록되었습니다.");
				taskContent.value = '';
				selectItem();
			}
		},
		error : function(error){
			alert("서버 내부 오류로 인해 등록에 실패했습니다.");
		}
	});
}

taskInsert.addEventListener('click', insertItem);

/* TASK DELETE */
function deleteItem(event) {
	if (confirm("선택하신 항목을 삭제하시겠습니까?") == true) {
		var id = event.target.id;
		$.ajax({
			type : 'delete',
			url : '/task/delete',
			headers : {
				"Content-Type" : "application/json",
				"X-HTTP-Method-Override" : "DELETE"
			},
			dataType : 'text',
			data : JSON.stringify({
				id : id
			}),
			success : function(result) {
				if (result.toUpperCase() == 'SUCCESS') {
					alert("삭제되었습니다.");
					selectItem();
				}
			},
			error : function(error){
				alert("서버 내부 오류로 인해 삭제에 실패했습니다.");
			}
		});
	}
}

/* TASK UPDATE */
function updateShow(event){
	var id = event.target.id;
	var ct = document.getElementById('ct' + id);
	var ci = document.getElementById('ci' + id);
	var cbs = document.getElementById('cbs' + id);
	var cbc = document.getElementById('cbc' + id);
	
	if(ct.style.display != 'none'){
		ct.style.display = 'none';
		ci.style.display = 'block';
		cbs.style.display = 'inline-block';
		cbc.style.display = 'inline-block';
	}
}

function updateHide(event) {
	var id = event.target.id.substring(3);
	var ct = document.getElementById('ct' + id);
	var ci = document.getElementById('ci' + id);
	var cbs = document.getElementById('cbs' + id);
	var cbc = document.getElementById('cbc' + id);
	
	if(ct.style.display == 'none'){
		ct.style.display = 'block';
		ci.style.display = 'none';
		cbs.style.display = 'none';
		cbc.style.display = 'none';
	}	
}

function updateItem(event) {
	var id = event.target.id.substring(3);
	var taskContent = document.getElementById('ci' + id);
	var content = taskContent.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
	
	$.ajax({
		type : 'put',
		url : '/task/update',
		headers : {
			"Content-Type" : "application/json",
			"X-HTTP-Method-Override" : "PUT"
		},
		dataType : 'text',
		data : JSON.stringify({
			id : id,
			content : content
		}),
		success : function(result) {
			if (result.toUpperCase() == 'SUCCESS') {
				alert("수정되었습니다.");
				selectItem();
			}
		},
		error : function(error){
			alert("서버 내부 오류로 인해 수정에 실패했습니다.");
		}
	});
}
